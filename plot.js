import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

const PredatorPreySimulator = () => {
  // State for model parameters
  const [alpha, setAlpha] = useState(1.5); // Prey growth rate
  const [beta, setBeta] = useState(0.02); // Predation rate
  const [delta, setDelta] = useState(0.8); // Predator death rate
  const [gamma, setGamma] = useState(0.01); // Predator reproduction rate
  const [envFactor, setEnvFactor] = useState(1); // Environmental factor
  const [initialPrey, setInitialPrey] = useState(100);
  const [initialPredator, setInitialPredator] = useState(20);
  const [showManual, setShowManual] = useState(false);
  const [manualSection, setManualSection] = useState('');

  // Generate data points
  const generateData = () => {
    let prey = initialPrey;
    let predator = initialPredator;
    const data = [];

    for (let t = 0; t < 100; t++) {
      data.push({ t, prey, predator });

      // Lotka-Volterra equations with environmental factor
      const dPrey = (alpha * prey - beta * prey * predator) * envFactor;
      const dPredator = (gamma * prey * predator - delta * predator) * envFactor;

      prey += dPrey;
      predator += dPredator;

      // Ensure populations don't go negative
      prey = Math.max(0, prey);
      predator = Math.max(0, predator);
    }

    return data;
  };

  const [data, setData] = useState(generateData());

  useEffect(() => {
    setData(generateData());
  }, [alpha, beta, delta, gamma, envFactor, initialPrey, initialPredator]);

  const ContextHelp = ({ topic, description }) => (
    <TooltipProvider>
      <UITooltip>
        <TooltipTrigger asChild>
          <button onClick={() => { setShowManual(true); setManualSection(topic); }} className="inline-flex items-center ml-2">
            <HelpCircle className="h-4 w-4 text-gray-500 hover:text-gray-700" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{description}</p>
          <p className="text-sm text-gray-500 mt-1">Click for more details</p>
        </TooltipContent>
      </UITooltip>
    </TooltipProvider>
  );

  const ParameterSlider = ({ parameter, value, setValue, min, max, step, description }) => (
    <div className="mb-4">
      <div className="flex items-center">
        <label className="block mb-2">{parameter}: {value.toFixed(2)}</label>
        <ContextHelp topic={parameter} description={description} />
      </div>
      <Slider value={[value]} onValueChange={([v]) => setValue(v)} min={min} max={max} step={step} />
    </div>
  );

  const UserManual = () => (
    <Dialog open={showManual} onOpenChange={setShowManual}>
      <DialogContent className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">User Manual</h2>
        <div className="h-[600px] overflow-y-auto bg-gray-100 p-4 font-mono text-sm whitespace-pre-wrap">
          {/* Manual content here */}
          Predator-Prey Dynamics Simulator: User Manual

          1. Introduction
          Welcome to the Predator-Prey Dynamics Simulator. This tool allows you to explore the complex interactions between predator and prey populations using an interactive model based on the Lotka-Volterra equations.

          2. Understanding the Parameters
          - α (alpha): Prey growth rate
          - β (beta): Predation rate
          - δ (delta): Predator death rate
          - γ (gamma): Predator reproduction rate
          - Environmental Factor: Influences both populations
          - Initial Prey Population: Starting number of prey
          - Initial Predator Population: Starting number of predators

          {/* ... rest of the manual content ... */}
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Predator-Prey Dynamics Simulator</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
            <p className="mb-4">Choose an option below:</p>
            <div className="flex flex-col space-y-2">
              <Button onClick={() => setShowManual(true)}>Open User Manual</Button>
              <Button variant="outline">Watch Tutorial Video</Button>
              <Button variant="outline">Contact Support</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="t" label={{ value: 'Time', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Population', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="prey" stroke="#8884d8" name="Prey" />
              <Line type="monotone" dataKey="predator" stroke="#82ca9d" name="Predator" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <ParameterSlider
            parameter="α (Prey growth rate)"
            value={alpha}
            setValue={setAlpha}
            min={0.1}
            max={3}
            step={0.1}
            description="Rate at which prey population grows in absence of predators"
          />
          <ParameterSlider
            parameter="β (Predation rate)"
            value={beta}
            setValue={setBeta}
            min={0.001}
            max={0.1}
            step={0.001}
            description="Rate at which predators consume prey"
          />
          <ParameterSlider
            parameter="δ (Predator death rate)"
            value={delta}
            setValue={setDelta}
            min={0.1}
            max={2}
            step={0.1}
            description="Rate at which predators die in absence of prey"
          />
          <ParameterSlider
            parameter="γ (Predator reproduction rate)"
            value={gamma}
            setValue={setGamma}
            min={0.001}
            max={0.05}
            step={0.001}
            description="Rate at which predators reproduce based on prey consumed"
          />
          <ParameterSlider
            parameter="Environmental Factor"
            value={envFactor}
            setValue={setEnvFactor}
            min={0.5}
            max={1.5}
            step={0.1}
            description="Factor representing environmental conditions affecting both populations"
          />
          <ParameterSlider
            parameter="Initial Prey Population"
            value={initialPrey}
            setValue={setInitialPrey}
            min={10}
            max={200}
            step={10}
            description="Starting number of prey in the simulation"
          />
          <ParameterSlider
            parameter="Initial Predator Population"
            value={initialPredator}
            setValue={setInitialPredator}
            min={5}
            max={50}
            step={5}
            description="Starting number of predators in the simulation"
          />
        </div>
      </div>
      <UserManual />
    </div>
  );
};

export default PredatorPreySimulator;
