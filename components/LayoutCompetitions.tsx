import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import down from "../public/down.svg";
import Accordion from "./Accordion";
import Classes from "./layoutstyle.module.css";
type Props = {
    question :string,
    answer: string,
    idx: number
}

interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

const Layout = ({handleClick, isSomeActive, data, turn, setTurn}:LayoutProps) => {
  return (
    <div className={Classes.main}>
        <span className={Classes.heading}>
            Competitions
        </span>

      {data.map((el,i)=>{
        return (
            <div className={Classes.wid} key={"questions"+i}>
                <Accordion
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={el.idx}
                />
            </div>
        )
      })}
    </div>
  )
}

export default Layout