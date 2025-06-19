"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { Droplets, Flame, HeartPulse } from "lucide-react";
// import { format } from "date-fns";

const chartData = [
  { name: "Jan", Water: 55, Steps: 70, Calories: 30 },
  { name: "Feb", Water: 60, Steps: 75, Calories: 40 },
  { name: "Mar", Water: 65, Steps: 80, Calories: 45 },
  { name: "Apr", Water: 80, Steps: 70, Calories: 50 },
  { name: "May", Water: 95, Steps: 85, Calories: 55 },
  { name: "Jun", Water: 75, Steps: 65, Calories: 60 },
];

export default function DashboardPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-20">
      <h2 className="font-bold text-4xl pb-4">Dashboard</h2>
      <div className="grid grid-cols-5 gap-x-4">
        <div className="grid grid-cols-2 col-span-4 gap-x-4 gap-y-4 mb-4">
          {/* Health Stats */}
          <Card className="col-span-1 px-5">
            <CardHeader>
              <CardTitle className="text-xl">Health Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Heart Rate</p>
                  <p className="text-2xl font-bold">
                    117{" "}
                    <span className="text-muted-foreground text-base">bpm</span>
                  </p>
                </div>
                <div className="bg-red-100 p-2 rounded-xl">
                  <HeartPulse className="text-red-500" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Cholesterol Level
                  </p>
                  <p className="text-2xl font-bold">
                    156{" "}
                    <span className="text-muted-foreground text-base">mg</span>
                  </p>
                </div>
                <div className="bg-yellow-100 p-2 rounded-xl">
                  <Flame className="text-yellow-500" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Glucose Level</p>
                  <p className="text-2xl font-bold">
                    124{" "}
                    <span className="text-muted-foreground text-base">ml</span>
                  </p>
                </div>
                <div className="bg-blue-100 p-2 rounded-xl">
                  <Droplets className="text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BMI Calculator */}
          <Card className="col-span-1">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-xl">BMI Calculator</CardTitle>
              {/* <Button variant="link" className="text-green-500 text-xs px-0">Edit</Button> */}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Height</span>
                <span className="text-red-500 font-medium">175cm</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Weight</span>
                <span className="text-green-500 font-medium">65kg</span>
              </div>
              <div className="text-sm">
                <p className="mb-1">Body Mass Index (BMI)</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">23.8</span>
                  <span className="text-green-600 text-sm">
                    You are Healthy
                  </span>
                </div>
                <div className="h-2 mt-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[50%]" />
                </div>
                <div className="flex justify-between text-xs mt-1 text-muted-foreground">
                  <span>15</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2 self-start">
            <CardHeader className="flex-row justify-between items-center">
              <CardTitle className="text-xl">Fitness Chart</CardTitle>
              <span className="text-green-600 text-sm font-medium">2025</span>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="Water"
                    stroke="#5B9EFF"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Steps"
                    stroke="#FF8E8E"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Calories"
                    stroke="#FFD06B"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1">
          <Card className="">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Calander</CardTitle>
                <div className="text-sm font-medium text-green-600">
                  May 2025
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                required
                className="border rounded-md"
              />
              <div className="pt-4 space-y-8 text-sm mt-10">
                <div className="border-l-4 border-amber-400 pl-3">
                  <p className="font-medium text-green-600">
                    8:30 AM - 9:00 AM
                  </p>
                  <p>Comprehensive Heart Screening</p>
                  <p className="text-muted-foreground text-xs">
                    Health Plus Clinic - Dr. Sarah Lee
                  </p>
                </div>
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-medium text-green-600">
                    9:00 AM - 9:30 AM
                  </p>
                  <p>Regular Cardiac Evaluation</p>
                  <p className="text-muted-foreground text-xs">
                    City Health Center - Dr. Emily Carter
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-3">
                  <p className="font-medium text-green-600">
                    11:00 AM - 11:30 AM
                  </p>
                  <p>Annual Heart Assessment</p>
                  <p className="text-muted-foreground text-xs">
                    Downtown Medical - Dr. John Smith
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
