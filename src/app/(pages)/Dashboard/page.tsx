'use client'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

type Appliance = {
  model: string;
  year: string;
};

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [applianceGroup, setApplianceGroup] = useState<Appliance[]>([]);

  const [tempModel, setTempModel] = useState('');
  const [tempYear, setTempYear] = useState('');

  const addAppliance = () => {
    if (tempModel.trim() && tempYear.trim()) {
      setApplianceGroup([...applianceGroup, { model: tempModel, year: tempYear }]);
      setTempModel('');
      setTempYear('');
      setOpenModal(false);
    }
  };

  const removeAppliance = (index: number) => {
    const updated = [...applianceGroup];
    updated.splice(index, 1);
    setApplianceGroup(updated);
  };

  const updateAppliance = (index: number, key: keyof Appliance, value: string) => {
    const updated = [...applianceGroup];
    updated[index][key] = value;
    setApplianceGroup(updated);
  };

  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Add Appliance</ModalHeader>
        <ModalBody>
          <div className='flex flex-col gap-4'>
            <TextInput
              placeholder="Appliance Model"
              value={tempModel}
              onChange={(e) => setTempModel(e.target.value)}
            />
            <TextInput
              placeholder="Year"
              value={tempYear}
              onChange={(e) => setTempYear(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={addAppliance} className='bg-[#FF9F1C] hover:bg-[#FFBF69]'>Add</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <div className='flex justify-center'>
        <div>
          <p className='font-semibold text-xl text-center'>Your Appliances</p>
          {applianceGroup.map((appliance, ibx) => (
            <div key={ibx} className='flex items-center gap-4 px-2 mb-4'>
              <img
                className='h-10 w-10 pr-2 hover:opacity-50 dark:invert cursor-pointer'
                src="../assets/x-lg.svg"
                alt="remove"
                onClick={() => removeAppliance(ibx)}
              />
              <div>
                <label className="block text-gray-700 text-sm font-bold">Model</label>
                <TextInput
                  value={appliance.model}
                  onChange={(e) => updateAppliance(ibx, 'model', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold">Year</label>
                <TextInput
                  value={appliance.year}
                  onChange={(e) => updateAppliance(ibx, 'year', e.target.value)}
                />
              </div>
            </div>
          ))}

          <div className='flex justify-center'>
            <Button onClick={() => setOpenModal(true)} className='bg-[#FF9F1C] hover:bg-[#FFBF69]'>
              Add Another Appliance
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
