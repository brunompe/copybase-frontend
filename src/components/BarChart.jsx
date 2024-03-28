import { Bar } from "react-chartjs-2";

export default function BarChart({ chartData }) {
  return (
    <div className=" h-[500px] w-[800px] bg-gray-900 text-white flex flex-col justify-center items-center rounded-md">
      <h2 className="">Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
              color: "white"
            },
          }
        }}
      />
    </div>
  );
}
