/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";
import { useState } from "react";

const chartdata = [
  {
    location: "Kennedy Commons",
    "Water Usage Hand Washing": 500, // Water usage for hand washing (in gallons)
    "Water Usage Dishwashing": 250, // Water usage for dishwashing (in gallons)
  },
  {
    location: "Traditions at Scott",
    "Water Usage Hand Washing": 600,
    "Water Usage Dishwashing": 200,
  },
  {
    location: "Traditions at Morill",
    "Water Usage Hand Washing": 450,
    "Water Usage Dishwashing": 220,
  },
  // Add more dining locations as needed
];

const valueFormatter = (number: number | bigint) =>
  `${new Intl.NumberFormat("us").format(number)} gallons`;

const formatters: { [key: string]: any } = {};
formatters.HandWashing = (number: number) => `${valueFormatter(number)}`;
formatters.Dishwashing = (number: number) => `${valueFormatter(number)}`;

const Kpis = {
  HandWashing: "Hand Washing",
  Dishwashing: "Dishwashing",
};

const kpiList = [Kpis.HandWashing, Kpis.Dishwashing];

export type DailyPerformance = {
  location: string;
  "Water Usage Hand Washing": number;
  "Water Usage Dishwashing": number;
};

export default function ChartView() {
  return (
    <>
      <Card>
        <Title>Water Usage Comparison in Dining Locations</Title>
        <Subtitle>
          Compare water usage for hand washing and dishwashing in different dining locations.
        </Subtitle>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="location"
          categories={["Water Usage Hand Washing", "Water Usage Dishwashing"]}
          colors={["blue", "green"]}
          valueFormatter={valueFormatter}
          yAxisWidth={48}
        />
      </Card>
    </>
  );
}
