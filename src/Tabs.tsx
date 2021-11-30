import React, { FC, HTMLAttributes, ReactChild,useMemo } from 'react';


export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  id:string;
  children:ReactChild;
}


export const Tab :FC<TabProps> = ({id,children}) => {
  return(
    <div id={id}>{children}</div>
  )
}

export interface TabButtonProps extends HTMLAttributes<HTMLDivElement> {
  id:string;
  children:ReactChild;
}


export const TabButton :FC<TabButtonProps> = ({id,children}) => {
  return(
    <li><a href={`#${id}`}>{children}</a></li>
  )
}

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  id:string;
  children:ReactChild;
}


export const TabContent :FC<TabContentProps> = ({id,children}) => {
  return(
    <div id={`#${id}`}>{children}</div>
  )
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  id:string;
  tabs: TabProps[]
}


const Tabs: FC<TabsProps> = (props) => {
  const tabs = useMemo( () => {

    //return props.tabs;
    return [
      {id: 'one', children:<div>One</div>}
    ]
  },[props.tabs])
   return(
    <div id={props.id}>
      <ul>
        {tabs.map((tab:TabProps) =><TabButton key={tab.id}  id={tab.id}>{tab.children}</TabButton> )}
      </ul>
    </div>

   )
};
export default Tabs;
