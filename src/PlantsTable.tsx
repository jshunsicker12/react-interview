// import { response } from 'express';
import React, { useEffect, useState } from "react";

export default function PlantsTable() {
    const [plants, setPlants] = useState([]);
    // const [ind, setPlants] = useState([]);

  const initialState: any[] | (() => any[]) = []
  const [indPlants, setIndPlants] = useState(initialState)
  const [keys, setKeys] = useState(initialState)
  const getData = async () => {
    const response = await fetch("http://localhost:3001/plants")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlants(data);
        console.log(plants );
      });
  };

  useEffect(() => {
    getData();
    getheader();
  }, []);

  const getheader = () => {

    // console.log(typeof plants);
    let localArray: any= []
    // plants.forEach((el:Array<any>)=> {
    //     console.log(el);

    //     for( var key in plants){
    //         // localArray.push(data[key])
    //         console.log(plants[key]);
    //       }
    //     // setIndPlants()
    // })
    for( var key in plants){
        localArray.push(plants[key])
        // console.log(plants[key]);
      }
    // setIndPlants(localArray)

    console.log(localArray);
    let resultArray: any[][] = [], keyarr: any[] = []
    localArray.map((el: any) => {
        // console.log(typeof el);
        let arr = []
        for( var key in el){
            // localArray.push(plants[key])
            // console.log(el[key]);
            arr.push(el[key])
            if(keyarr.length < 5)
            keyarr.push(key)
          }
        resultArray.push(arr)
        
    })
    console.log(resultArray, keyarr);
    setIndPlants(resultArray)
    setKeys(keyarr)
    

  };

  return (
    <div>
      <table>
        <thead>
          {
            keys && keys.map((el)=> {
               return <th>{el}</th>
            })
            }
          {/* <th></th> */}
        </thead>
        {
            indPlants && indPlants.map((el)=> {
                return <tr>
                    {el && el.map((rowdata: any)=> {
                        return <td>{rowdata}</td>
                    })}
                </tr>
            })
        }
      </table>
      <button className="getview" onClick={getheader}>click me </button>
    </div>
  );
}
