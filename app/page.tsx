"use client";

import { useState } from "react";

export default function Home() {
  const [answered, setAnswered] = useState(135);
  const [missed, setMissed] = useState(20);
  const [longCalls, setLongCalls] = useState(15);
  const [agentSeconds, setAgentSeconds] = useState(18844);
  const [twilioSeconds, setTwilioSeconds] = useState(22197);

  const totalCalls = answered + missed;

  const missedRate = totalCalls > 0 ? (missed / totalCalls) * 100 : 0;
  const longRate = answered > 0 ? (longCalls / answered) * 100 : 0;
  const timeEfficiency =
    twilioSeconds > 0 ? (agentSeconds / twilioSeconds) * 100 : 0;

  const efficiencyScore = Math.max(
    0,
    Math.min(
      100,
      100 -
        missedRate * 1.5 -
        longRate * 0.7 +
        (timeEfficiency - 80) * 0.2
    )
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold">Daily VR Efficiency Score</h1>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            type="number"
            value={answered}
            onChange={(e) => setAnswered(Number(e.target.value))}
            placeholder="Answered"
            className="border p-3 rounded"
          />

          <input
            type="number"
            value={missed}
            onChange={(e) => setMissed(Number(e.target.value))}
            placeholder="Missed"
            className="border p-3 rounded"
          />

          <input
            type="number"
            value={longCalls}
            onChange={(e) => setLongCalls(Number(e.target.value))}
            placeholder="Long Calls"
            className="border p-3 rounded"
          />

          <input
            type="number"
            value={agentSeconds}
            onChange={(e) => setAgentSeconds(Number(e.target.value))}
            placeholder="Agent Seconds"
            className="border p-3 rounded"
          />

          <input
            type="number"
            value={twilioSeconds}
            onChange={(e) => setTwilioSeconds(Number(e.target.value))}
            placeholder="Twilio Seconds"
            className="border p-3 rounded"
          />
        </div>

        <div className="mt-8 bg-blue-100 p-6 rounded">
          <h2 className="text-xl font-semibold">Efficiency Score</h2>
          <p className="text-4xl font-bold">
            {efficiencyScore.toFixed(1)}%
          </p>
        </div>

        <div className="mt-6 space-y-2">
          <p>Missed Rate: {missedRate.toFixed(1)}%</p>
          <p>Long Call Rate: {longRate.toFixed(1)}%</p>
          <p>Time Efficiency: {timeEfficiency.toFixed(1)}%</p>
        </div>
      </div>
    </main>
  );
}