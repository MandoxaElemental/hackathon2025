'use client';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

type Appliance = {
  model: string;
  year: string;
  flaggedOld?: boolean;
  flaggedLeaky?: boolean;
  estimatedCost?: number;
};

const AVERAGE_CA_WATER_BUDGET = 75;

const HIGH_WATER_USE_APPLIANCES: Record<string, number> = {
  'bathtub': 1000,
  'shower': 1500,
  'toilet': 900,
  'washing machine': 1000,
  'dishwasher': 600,
  'kitchen sink': 500,
  'bathroom sink': 300,
  'garden hose': 2000,
  'sprinkler': 3000,
  'hot tub': 2500,
  'fountain': 800,
  'water softener': 700,
  'swamp cooler': 1000,
  'ice maker': 150,
  'humidifier': 100,
  'bidet': 100,
  'reverse osmosis system': 400,
  'evaporative cooler': 1200,
  'pressure washer': 600,
  'pool': 5000,
  'car wash': 300,
  'steam shower': 2000,
  'jacuzzi': 2500,
  'irrigation system': 3500,
  'power washer': 600,
  'portable air conditioner with water cooling': 800,
  'misting system': 1500,
  'greenhouse irrigation': 2500,

  'microwave': 0,
  'refrigerator': 0,
  'oven': 0,
  'stove': 0,
  'toaster': 0,
  'air fryer': 0,
  'coffee maker': 50,
  'blender': 20,
  'vacuum': 0,
  'dryer': 0,
  'television': 0,
  'computer': 0,
};


const LOCAL_STORAGE_KEY = 'applianceGroupData';
const CALIFORNIA_WATER_RATE = 0.005;

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [applianceGroup, setApplianceGroup] = useState<Appliance[]>([]);

  const [tempModel, setTempModel] = useState('');
  const [tempYear, setTempYear] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setApplianceGroup(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(applianceGroup));
  }, [applianceGroup]);

  const addAppliance = () => {
    if (tempModel.trim() && tempYear.trim()) {
      const yearNum = parseInt(tempYear);
      const isOld = !isNaN(yearNum) && yearNum < 2005;

      const lowerModel = tempModel.toLowerCase();
      const match = Object.entries(HIGH_WATER_USE_APPLIANCES).find(([key]) =>
        lowerModel.includes(key)
      );

      const isHighWaterUse = !!match;
      const estimatedGallons = match ? match[1] : 0;
      const estimatedCost = +(estimatedGallons * CALIFORNIA_WATER_RATE).toFixed(2);

      setApplianceGroup([
        ...applianceGroup,
        {
          model: tempModel,
          year: tempYear,
          flaggedOld: isOld,
          flaggedLeaky: isHighWaterUse,
          estimatedCost: estimatedCost,
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

  const totalMonthlyCost = applianceGroup.reduce(
    (acc, item) => acc + (item.estimatedCost || 0),
    0
  );
  const overBudget = totalMonthlyCost > AVERAGE_CA_WATER_BUDGET;

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
              {overBudget && (
              <div className="bg-red-100 text-red-800 border border-red-300 p-3 rounded-md mb-4 text-center max-w-md mx-auto">
                🚨 Your estimated monthly water cost is <strong>${totalMonthlyCost.toFixed(2)}</strong>, which exceeds the average California household water budget of ${AVERAGE_CA_WATER_BUDGET}. Consider replacing or reducing usage of high-water appliances.
              </div>
)}
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
              {appliance.estimatedCost !== undefined && appliance.estimatedCost > 0 && (
                <p className="text-sm text-blue-600">
                  💲 Estimated Monthly Water Cost: <strong>${appliance.estimatedCost}</strong>
                </p>
              )}
              <p className="text-center text-sm text-gray-600 mb-4">
  💧 Total Estimated Monthly Water Cost: <strong>${totalMonthlyCost.toFixed(2)}</strong>
</p>
            </div>
          ))}

          <div className='flex justify-cente p-5'>
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
