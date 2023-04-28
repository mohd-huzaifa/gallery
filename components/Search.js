import React, { useEffect, useState } from 'react'
import GridPhoto from './GridPhoto';

function Search() {
    const [data, setData] = useState();
    const [searchItem, setSearchItem] = useState();
    const [newArr, setNewArr] = useState()

    async function handleClick(e) {
        e.preventDefault();
        const response = await fetch('/api/images');
        const data = await response.json();
        setData(data);

        const arr = data.filter((item) => {
            return item.desc.toLowerCase().includes(searchItem);
        })
        setNewArr(arr);
        // setSearchItem("")
    }
    return (
        <>
            <div className="container  my-1">
                <div className="row justify-content-center">
                    <div className="col-3 py-3">
                        <div className="input-group">
                            <div className="form-outline">
                                <input type="search" id="form1" placeholder='Search Images' value={searchItem} onChange={(e) => {
                                    setSearchItem(e.target.value);
    
                                }} className="form-control" />
                                {/* <label className="form-label" for="form1">Search</label> */}
                            </div>
                            <button type="button" className="btn btn-primary" onClick={(e) => { handleClick(e) }}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                newArr ?
                    <div className="container ">
                        <h3 className='h-3 text-center mx-2 my-1 fw-bold'>{searchItem} Images</h3>
                        {
                            <div className="container">
                                <div className="row mx-2 my-1 justify-content-start">
                                    {
                                        newArr.map((item) => {
                                            return <GridPhoto desc={item.desc} url={item.url} id={item.id} />
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div> :
                    <div className="container"></div>
            }

        </>
    )
}

export default Search
