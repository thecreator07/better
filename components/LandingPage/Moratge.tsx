"use client";
import React, { useState, ChangeEvent, useEffect } from "react";

function Mortage() {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [loanTerm, setLoanTerm] = useState<number>(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const value = parseFloat(event.target.value);
    setter(isNaN(value) ? 0 : value);
  };

  useEffect(() => {
    const calculatePayment = () => {
      if (loanAmount === 0 || interestRate === 0 || loanTerm === 0) {
        setMonthlyPayment(0);
        return;
      }

      const downPayment = (downPaymentPercent / 100) * loanAmount;
      const principal = loanAmount - downPayment;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      const monthlyPayment =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      setMonthlyPayment(parseFloat(monthlyPayment.toFixed(2)));
    };

    calculatePayment();
  }, [loanAmount, interestRate, loanTerm, downPaymentPercent]);

  return (
    <div className="text-black h-[80vh] w-full py-20 justify-between flex-col px-32 flex items-center bg-white">
      <div className="flex gap-8 flex-col">
        <h1 className="text-5xl font-semibold">Mortgage calculator</h1>
        <p className="w-2/3">
          Use our mortgage calculator built directly into it! Get accurate
          estimates for your monthly mortgage payments if you will be required
          to have private mortgage insurance (PMI). Also learn why
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="text-base text-black font-medium">Home Price</h1>
          <div className=" w-64 h-16 relative flex items-center">
            <h1 className="absolute left-2 text-5xl">$</h1>
            <input
              className="rounded-xl w-full h-full border-2 text-5xl font-semibold py-4 pl-10 focus:outline-none  border-slate-200 hover:transition-all hover:duration-300  hover:shadow-green-800 hover:shadow-[0_0_0_4px_inset]"
              type="number"
              value={loanAmount}
              onChange={(e) => handleInputChange(e, setLoanAmount)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-base text-black font-medium">Monthly payment</h1>
          <h2 className="text-5xl  font-semibold">$ {monthlyPayment}/mo</h2>
        </div>
        <button className="text-base font-medium py-5 px-10 bg-green-700 text-white rounded-xl">
          Get pre-approved
        </button>
      </div>
      <input
        type="range"
        onChange={(e) => handleInputChange(e, setLoanAmount)}
        min={50000}
        max={3000000}
        className="w-full"
      />
      {/* <div> 
        <h1>Loan Calculator</h1>
        <div className="">
          <label className="text-white">Loan Amount: </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="text-white">Interest Rate (%): </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="text-white">Loan Term (years): </label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="text-white">Down Payment (%): </label>
          <input
            type="number"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(parseFloat(e.target.value))}
          />
        </div>
        <button onClick={calculatePayment} className="text-white">
          Calculate Monthly Payment
        </button>
        {monthlyPayment > 0 && (
          <h2 className="text-white">Monthly Payment: ${monthlyPayment}</h2>
        )}
      </div> */}
    </div>
  );
}

export default Mortage;
