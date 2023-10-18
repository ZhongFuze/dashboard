"use client";

import React, { useState } from 'react';
import Image from "next/image";

const Pipeline = () => {
  const [graph, setGraph] = useState('');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [algorithm, setAlgorithm] = useState('');
  const [subAlgorithm, setSubAlgorithm] = useState('');

  const executeFunction = () => {
    // Here you'll implement what happens once the user clicks Execute
    // This function should now be accessible since it's defined within the component
    console.log(graph);
    console.log(data);
    console.log(filter);
    console.log(algorithm);
    console.log(subAlgorithm);
  };

  const handleGraphChange = (e) => {
    const selectedValue = e.target.value;
    setGraph(prevState => [...prevState, selectedValue]);
  }
  const handleDataChange = (e) => {
    const selectedValue = e.target.value;
    setData(prevState => [...prevState, selectedValue]);
  };

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
    setSubAlgorithm([]); // Reset sub-algorithm when main algorithm changes
  };
  // Additional handler for removing selected sub-algorithm
  const handleRemoveSelectedSubAlgorithm = (valueToRemove) => {
    setSubAlgorithm(subAlgorithm.filter(value => value !== valueToRemove));
  };

  // Additional handler for removing selected data
  const handleRemoveSelectedData = (valueToRemove) => {
    setData(data.filter(value => value !== valueToRemove));
  };

  const handleSubAlgorithmChange = (e) => {
    const selectedValue = e.target.value;
    setSubAlgorithm(prevState => [...prevState, selectedValue]);
  };

  return (
    <div className='widget_option flex justify-between items-start gap-5'>
      <select onChange={handleGraphChange} value={graph}
        className='flex justify-left font-satoshi font-semibold text-gray-900'>
        <option value="SocialGraph">SocialGraph</option>
        <option value="IdentityGraph">IdentityGraph</option>
      </select>

      {/* Multiple Select */}
      <div>
        <p className='flex justify-left font-satoshi font-semibold text-gray-900'>Choose Data</p>
        <select multiple onChange={handleDataChange} value={data}
          className='flex justify-center font-satoshi font-semibold text-gray-900'>
          <option value="Identity">Identity</option>
          <option value="Contract">Contract</option>
          <option value="Hold">Hold</option>
          <option value="Proof">Proof</option>
          <option value="SocialFeed">SocialFeed</option>
        </select>
      </div>
      

      {/* Displaying selected data and remove option */}
      <div className='flex-row'>
        <p className='flex justify-left font-satoshi font-semibold text-gray-900'>Select Data</p>
        {data.map(value => (
          <div key={value}>
            {value} <button onClick={() => handleRemoveSelectedData(value)}>
              <Image
                src="/assets/icons/tick.svg"
                alt="tick_icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        ))}
      </div>

      <div>
        <label><p className='flex justify-left font-satoshi font-semibold text-gray-900'>Filter</p></label>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter (e.g., crossbell, lens)"/>
      </div>

      <div className='flex-col'>
        <label><p className='flex justify-left font-satoshi font-semibold text-gray-900'>Choose Algorithm</p> </label>
        <select onChange={handleAlgorithmChange} value={algorithm}>
          <option value="Centrality">Centrality</option>
          <option value="Classification">Classification</option>
          <option value="Clustering">Clustering</option>
          <option value="Community">Community</option>
          <option value="Embeddings">Embeddings</option>
          
        </select>
      </div>
    
      {algorithm && (
        <div>
          <select multiple onChange={handleSubAlgorithmChange} value={subAlgorithm}>
            {algorithm === 'Centrality' && (
              <>
                <option value="Betweenness">Betweenness</option>
                <option value="PageRank">PageRank</option>
              </>
            )}
            {algorithm === 'Classification' && (
              <option value="K Nearest Neighbors">K Nearest Neighbors</option>
            )}
            {algorithm === 'Clustering' && (
              <>
                <option value="DBSCAN">DBSCAN</option>
                <option value="KMeans">KMeans</option>
                <option value="RCC">RCC</option>
              </>
            )}
            {algorithm === 'Community' && (
              <>
                <option value="Louvain">Louvain</option>
                <option value="NMF">NMF</option>
                <option value="LabelPropagation">Label Propagation</option>
              </>
            )}
            {algorithm === 'Embeddings' && (
              <>
                <option value="FastRandomProjection">FastRP</option>
                <option value="RandomWalk">Random Walk</option>
              </>
            )}
            
          </select>

          {/* Displaying selected sub-algorithms and remove option */}
          <div className='flex-col'>
            {subAlgorithm.map(value => (
              <div key={value}>
                {value} <button onClick={() => handleRemoveSelectedSubAlgorithm(value)}>
                  <Image
                    src="/assets/icons/tick.svg"
                    alt="tick_icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <button onClick={executeFunction}>
        <Image
          src="/assets/icons/run.svg"
          alt="tick_icon"
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}


export default Pipeline