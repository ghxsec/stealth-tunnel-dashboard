
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BandwidthChartProps {
  data: {
    name: string;
    upload: number;
    download: number;
  }[];
}

const BandwidthChart: React.FC<BandwidthChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Bandwidth Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                stroke="rgba(255,255,255,0.3)" 
                fontSize={12} 
                tickLine={false}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.3)" 
                fontSize={12} 
                tickLine={false} 
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                tickFormatter={(value) => `${value}GB`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(30,30,30,0.9)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="download" 
                stroke="#3a86ff" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#3a86ff' }}
              />
              <Line 
                type="monotone" 
                dataKey="upload" 
                stroke="#06d6a0" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#06d6a0' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-vpn-blue mr-2"></span>
            <span className="text-sm">Download</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-vpn-green mr-2"></span>
            <span className="text-sm">Upload</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BandwidthChart;
