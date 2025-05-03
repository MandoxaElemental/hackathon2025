'use client';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

type Appliance = {
  model: string;
  year: string;
  flaggedOld?: boolean;
  flaggedLeaky?: boolean;
};

const HIGH_WATER_USE_APPLIANCES = [
  'bathtub',
  'shower',
  'garden hose',
  'sprinkler',
  'washing machine',
  'dishwasher',
  'hot tub',
  'fountain',
];

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [applianceGroup, setApplianceGroup] = useState<Appliance[]>([]);

  const [tempModel, setTempModel] = useState('');
  const [tempYear, setTempYear] = useState('');

  const addAppliance = () => {
    if (tempModel.trim() && tempYear.trim()) {
      const yearNum = parseInt(tempYear);
      const isOld = !isNaN(yearNum) && yearNum < 2005;

      const lowerModel = tempModel.toLowerCase();
      const isHighWaterUse = HIGH_WATER_USE_APPLIANCES.some((item) =>
        lowerModel.includes(item)
      );

      setApplianceGroup([
        ...applianceGroup,
        {
          model: tempModel,
          year: tempYear,
          flaggedOld: isOld,
          flaggedLeaky: isHighWaterUse,
        },
      ]);

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

  return (
    <div className='pt-5'>
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
          <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <div className='flex justify-center'>
        <div>
          <p className='font-semibold text-xl text-center p-5'>Your Appliances</p>
          {applianceGroup.map((appliance, ibx) => (
            <div
              key={ibx}
              className={`flex flex-col gap-2 px-2 mb-4 border p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 ${
                appliance.flaggedOld || appliance.flaggedLeaky ? 'border-red-500' : 'border-gray-200'
              }`}
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img
                    className='h-6 w-6 hover:opacity-50 dark:invert cursor-pointer'
                    src="../assets/x-lg.svg"
                    alt="remove"
                    onClick={() => removeAppliance(ibx)}
                  />
                  <div>
                    <p className="text-sm text-gray-500">Model</p>
                    <p className="font-medium">{appliance.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium">{appliance.year}</p>
                  </div>
                </div>
              </div>

              {appliance.flaggedOld && (
                <p className="text-sm text-red-600">
                  ⚠️ This appliance may not be water-efficient. Consider upgrading.
                </p>
              )}
              {appliance.flaggedLeaky && (
                <p className="text-sm text-yellow-600">
                  💧 This appliance uses a lot of water. Make sure it’s turned off when not in use.
                </p>
              )}
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
