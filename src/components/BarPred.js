import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const BarPred = () => {

  const [outputData, setOutputData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const Vegetable = e.target.Vegetable.value;
    const State = e.target.State.value;
    if (State == 'Agartala') {
      if (Vegetable == 'Potato') {
        axios({
          method: "GET",
          url: "http://localhost:3000/pota",
        })
          .then((response) => {
            const res = response.data
            setOutputData(({
              output: res.output
            }))
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
      }
      else if (Vegetable == 'Onion') {
        axios({
          method: "GET",
          url: "http://localhost:5000/ona",
        })
          .then((response) => {
            const res = response.data
            setOutputData(({
              output: res.output
            }))
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
      }
      else if (Vegetable == 'Tomato') {
        axios({
          method: "GET",
          url: "http://localhost:5000/toa",
        })
          .then((response) => {
            const res = response.data
            setOutputData(({
              output: res.output
            }))
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
      }
    }
    else if (State == 'Dehradun') {
      if (Vegetable == 'Potato') {
        axios({
          method: "GET",
          url: "http://localhost:5000/potd",
        })
          .then((response) => {
            const res = response.data
            setOutputData(({
              output: res.output
            }))
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
      }
      else if (Vegetable == 'Onion') {
        axios({
          method: "GET",
          url: "http://localhost:5000/ond",
        })
          .then((response) => {
            const res = response.data
            setOutputData(({
              output: res.output
            }))
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
      }
      else if (Vegetable == 'Tomato') {
        axios({
          method: "GET",
          url: "http://localhost:5000/tod",
        })
          .then((response) => {
            const res = response.data
            setOutputData(({
              output: res.output
            }))
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
      }
    }
  }
  const navigate = useNavigate();
  const [state, setState] = useState({
    options: {
      colors: ["#C19A6B", "#870D63", "#AF1313"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        type: 'datetime'
      },
    },
    series: [
      {
        name: "Potato",
        data: [{ x: '7-23-2023 GMT', y: 30 }, { x: '7-24-2023 GMT', y: 32 }, { x: '7-25-2023 GMT', y: 32 }, { x: '7-26-2023 GMT', y: 32 }, { x: '7-27-2023', y: 31 }, { x: '7-28-2023', y: 31 }, { x: '7-29-2023 GMT', y: 32 }]
      },
      {
        name: "Onion",
        data: [{ x: '7-23-2023 GMT', y: 22 }, { x: '7-24-2023 GMT', y: 27 }, { x: '7-25-2023 GMT', y: 27 }, { x: '7-26-2023 GMT', y: 27 }, { x: '7-27-2023', y: 27 }, { x: '7-28-2023', y: 27 }, { x: '7-29-2023 GMT', y: 29 }]
      },
      {
        name: "Tomato",
        data: [{ x: '7-23-2023 GMT', y: 108 }, { x: '7-24-2023 GMT', y: 91 }, { x: '7-25-2023 GMT', y: 91 }, { x: '7-26-2023 GMT', y: 91 }, { x: '7-27-2023', y: 82 }, { x: '7-28-2023', y: 82 }, { x: '7-29-2023 GMT', y: 120 }]
      },
    ],
  }
  );
  const [show, setShow] = useState(false);
  return (
    <div className='flex flex-col items-center py-1 gap-3 mt-1'>
      <div className="flex flex-col row py-1 gap-1 mt-1  bg-gray-300 hover:bg-white">
        {/* <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="475"
          />
        </div>
        <div className="col-4">
          {show?<Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="475"
          />:null}
        </div> */}
      </div>
      <button onClick={() => setShow(!show)} className='text-white text-xl font-Quicksand p-2 pb-5 bg-red-500/70 hover:bg-red-400/70 h-[100px] w-[120px] rounded-xl'>Toggle Form and Graph</button>
      {!show ? <form method="POST" onSubmit={handleSubmit}>
        <p className="text-white text-xl">Vegetable:</p>
        <select id="Vegetable" name="Vegetable">
          <option value="Potato">Potato</option>
          <option value="Onion">Onion</option>
          <option value="Tomato">Tomato</option>
        </select><br />
        <p className="text-white text-xl" >State:</p>
        <select id="State" name="State">
          <option value="Agartala">Agartala</option>
          <option value="Dehradun">Dehradun</option>
        </select><br />
        <input className='text-white text-4xl font-Quicksand p-2 pb-5 rounded-2xl bg-red-900/50 hover:bg-red-800/50 h-[60px] w-[180px]' type='submit' value='Prediction' />
      </form> : null}
      {outputData && <p className="text-white text-xl">{outputData.output}</p>}
    </div>
  );
}

export default BarPred;
