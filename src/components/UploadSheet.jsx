import { useState } from "react"
import axios from "axios"
import SvgComponent from "./svg/SvgComponent"
import { useNavigate } from "react-router-dom";

export default function UploadSheet() {
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const handleChange = async (e) => {
    setFile(e.target.files[0])
  }

  const handleClick = async () => {
    try {
      const formData = new FormData()
      if (file !== null) {
        formData.append("file", file)
      }
      const result = await axios.post("http://localhost:3000/spreadsheet/upload", formData)
      console.log(result)
      // navigate("/chart", { state: { activeUsers: result.data } })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-[700px] h-[500px] flex justify-center items-center" >
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <SvgComponent />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para carregar</span> ou arraste aqui</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">XLSX or CSV</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} />
          </label>
          <button className=" w-52 bg-blue-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClick}>Carregar dados</button>
        </div>
      </div>
    </>
  )
}