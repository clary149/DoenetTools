import React, { useEffect } from 'react';
// import { useHistory } from 'react-router';
import Button from '../../../_reactComponents/PanelHeaderComponents/Button';

import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedMenuPanelAtom } from '../Panels/NewMenuPanel';
import { drivecardSelectedNodesAtom } from '../ToolHandlers/CourseToolHandler'
import { toolViewAtom, searchParamAtomFamily, paramObjAtom } from '../NewToolRoot';
import DriveCards from '../../../_reactComponents/Drive/DriveCards';

export default function DriveCardsNew(props){
  // console.log(">>>===DriveCards");
  const driveId = useRecoilValue(drivecardSelectedNodesAtom);
  const setSelectedCourse = useRecoilCallback(({set})=>(driveIds)=>{
    set(drivecardSelectedNodesAtom,driveIds)
    set(selectedMenuPanelAtom,"SelectedCourse");
  },[])
  const setParamObj = useSetRecoilState(paramObjAtom);
  // const goToNav = useRecoilCallback(({set})=>()=>{
    // window.history.pushState('','','/new#/course?tool=navigation')
    // set(searchParamAtomFamily('tool'), "navigation")

  // },[])

  const tempChangeMenus = useRecoilCallback(({set})=>(newMenus,menusTitles,initOpen)=>{
    set(toolViewAtom,(was)=>{
      let newObj = {...was};
      newObj.currentMenus = newMenus;
      newObj.menusTitles = menusTitles;
      newObj.menusInitOpen = initOpen;
      return newObj
    })
  })


  // const [count,setCount] = useState(0)
  // let history = useHistory();
  return <div style={props.style}><h1>Drive Cards</h1>
  {driveId.map(item => {
    return (
      <p>{item.label}</p>
      )
  })}
  <hr />

  <h2>Selection Experiment</h2>
  <button onClick={(e)=>{e.stopPropagation();setSelectedCourse(['A Id','B Id'])}}>Test A & BSelection</button>
  <button onClick={(e)=>{e.stopPropagation();setSelectedCourse(['A Id'])}}>Test A Selection</button>
  {/* <button onClick={(e)=>{e.stopPropagation();clearSelectedCourse()}}>Clear Selection</button> */}
  <hr />
  <div><button onClick={(e)=>{e.stopPropagation();setParamObj({tool:'navigation'});}}>Go To navigation</button></div>


  </div>
}