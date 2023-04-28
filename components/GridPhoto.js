import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Draggable, Droppable } from 'react-drag-and-drop';
import { useState } from 'react';
// import back from '../assets/back.jpg'
import style from '../styles/Home.module.css'
function GridPhoto({ desc, url , id }) {
   
    return (
        <div className="col-3 my-2 h-25 d-inline-block">
            <Draggable>
                <Link href={{ pathname: '/detail', query: { keyword: id } }}>
                    <div className="img-thumbnail img-fluid">
                        <Image
                            src={url}
                            title='background image'
                            height={300}
                            width={400}
                        />                      
                    </div>
                    <div className="h-6">
                        <p>{desc.slice(0,100)}...</p>
                    </div>
                </Link>
            </Draggable>
        </div>
    )
}

export default GridPhoto
