import axios from "axios";
import React, { useState } from "react";

const GetKeyComponent = () => {
  const [retrievedValue, setRetrievedValue] = useState("");
  const [getKey, setGetKey] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleGet = async () => {
    if (getKey) {
      try {
        const response = await axios.get(`${API_BASE_URL}get`, {
          params: {
            key: getKey, // Send the key as a query parameter
          },
        });
        setRetrievedValue(response.data.value);
      } catch (error) {
        alert("Key not found: " + error.message);
      }
    } else {
      alert("Please enter the key");
    }
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform transition hover:shadow-xl hover:scale-105">
      <h2 className="text-3xl font-semibold text-gray-100 mb-6">Get Key</h2>
      <input
        type="text"
        placeholder="Key"
        value={getKey}
        onChange={(e) => {
          if (!e.target.value) {
            setRetrievedValue("");
          }
          setGetKey(e.target.value);
        }}
        className="w-full p-4 mb-4 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleGet}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-200"
      >
        Get Value
      </button>
      {retrievedValue && (
        <p className="mt-6 text-lg font-semibold text-gray-200">
          Retrieved Key:{" "}
          {getKey && <span className="text-blue-400">{getKey}</span>}
          <br/>
          Retrieved Value:{" "}
          {getKey && <span className="text-blue-400">{retrievedValue}</span>}
        </p>
      )}
    </div>
  );
};

export default GetKeyComponent;
