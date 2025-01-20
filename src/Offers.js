import React, { useState, useRef } from 'react';
import './menu.css';

export default function Offers() {
  const divref = useRef(null);

  const food = [
    {
      Name: "Vegan Salad",
      Cost: "$8.97",
      img:"/images/menu-item-04.jpg"
    },
    {
      Name: "Vegan Chocalate",
      Cost: "$6.78",
       img:"/images/menu-item-04.jpg"
    },
    {
      Name: "Vegan Salad",
      Cost: "$8.97",
      img:"/images/menu-item-04.jpg"
    },
    {
      Name: "Vegan Chocalate",
      Cost: "$6.78",
      img:"/images/menu-item-04.jpg"
    },
    {
      Name: "Vegan Salad",
      Cost: "$8.97",
      img:"/images/menu-item-04.jpg"
    },
    {
      Name: "Vegan Chocalate",
      Cost: "$6.78",
      img:"/images/tab-item-03.png"
    },
  ];
  const food1 = [
    {
      Name: "Broccali soup",
      Cost: "$8.97"
    },
    {
      Name: "Broccali soup",
      Cost: "$6.78"
    },
    {
      Name: "Vegan Bread",
      Cost: "$8.97"
    },
    {
      Name: "Vegan Chocalate",
      Cost: "$6.78"
    },
    {
      Name: "Vegan Salad",
      Cost: "$8.97"
    },
    {
      Name: "Vegan Chocalate",
      Cost: "$6.78"
    },
  ];

  // 1. State to track the active tab
  const [activeTab, setActiveTab] = useState('breakfast'); // Default tab is 'breakfast'

  // 2. Handle tab click and set the active tab
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  // Special component to display each food item
  let Specials = (props) => {
    return (
      <div className="col-5  d-flex gap-4" style={{ height: '90px' }}>
        <img src={props.img} style={{ width: "170px", height: "100px" }} className="card-img-top" alt="Image description" />
        <div>
          <h5>{props.Name}</h5>
          <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
        </div>
        <div className="" style={{ width: "90px", height: "100px", background: "coral",fontSize:'20px',fontWeight:"700",color:"white",display:"flex",alignItems:"center",justifyContent:"center" }}>
          {props.Cost}
        </div>
      </div>
    );
  }

  return (
    <div className=' mt-5 pt-2'>
      <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h6 className='mb-4' style={{ fontWeight: "500", color: "red", display: "inline-block" }}>Klassy Week</h6>
        <div>
          <h2 className=' mb-0 ' style={{ fontWeight: "900", fontSize: "30px" }}>We offer the best</h2>
          <h2 className='mt-0 mb-4' style={{ fontWeight: "900" }}>ingredients for you</h2>
        </div>
        <div className='d-flex gap-2 align-items-center'>
          <div onClick={() => { handleClick('breakfast'); }} className='d-flex gap-2 align-items-center flex-column' style={{ width: "100px", height: "100px" }}>
            <img src="/images/tab-icon-01.png" />
            <h6>Breakfast</h6>
          </div>
          <div onClick={() => { handleClick('lunch'); }} className='d-flex gap-2 align-items-center flex-column' style={{ width: "100px", height: "100px" }}>
            <img src="/images/tab-icon-02.png" />
            <h6>Lunch</h6>
          </div>
          <div onClick={() => { handleClick('dinner'); }} className='d-flex gap-2 align-items-center flex-column' style={{ width: "100px", height: "100px" }}>
            <img src="/images/tab-icon-03.png" />
            <h6>Dinner</h6>
          </div>
        </div>
      </div>

      {/* Conditionally render the breakfast content */}
      <div className=" w-100 flex-wrap p-5 align-items-center justify-content-center gap-5 div1" style={{ display: activeTab === 'breakfast' ? 'flex' : 'none' }}>
        {food.map((item) => {
          return (
            <Specials Name={item.Name} Cost={item.Cost} img={item.img} />
          );
        })}
      </div>

      {/* Conditionally render the lunch content */}
      <div className=" w-100 flex-wrap p-5 align-items-center justify-content-center gap-5 div2" style={{ display: activeTab === 'lunch' ? 'flex' : 'none' }}>
        {food1.map((item) => {
          return (
            <Specials Name={item.Name } Cost={item.Cost} img='/images/tab-item-03.png' />
          );
        })}
      </div>

      {/* Conditionally render the dinner content */}
      <div className="w-100 flex-wrap p-5 align-items-center justify-content-center gap-5 div3" style={{ display: activeTab === 'dinner' ? 'flex' : 'none' }}>
        {food.map((item) => {
          return (
            <Specials Name={item.Name} Cost={item.Cost} img='/images/tab-item-03.png' />
          );
        })}
      </div>
    </div>
  );
}
