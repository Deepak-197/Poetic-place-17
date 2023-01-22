function Pagination({current,totalPages, onChange}){
  
    const prev = <button className="btn" disabled={current==1} onClick={()=>onChange(current=1)}>{1}</button>;
    const secondPage = <button className="btn" disabled={current==2} onClick={()=>onChange(current=2)}>{2}</button>;
    const thirdPage=<button className="btn" disabled={current==3} onClick={()=>onChange(current=3)}>{3}</button>;
    const fourthPage=<button className="btn" disabled={current==4} onClick={()=>onChange(current=4)}>{4}</button>
    const fifthPage=<button className="btn" disabled={current==5} onClick={()=>onChange(current=5)}>{5}</button>
    const sixthPage=<button className="btn" disabled={current==6} onClick={()=>onChange(current=6)}>{6}</button>
    const seventhPage=<button className="btn" disabled={current==7} onClick={()=>onChange(current=7)}>{7}</button>
    const eighthPage=<button className="btn" disabled={current==8} onClick={()=>onChange(current=8)}>{8}</button>
    const ninthPage=<button className="btn" disabled={current==9} onClick={()=>onChange(current=9)}>{9}</button>
    const tenthPage=<button className="btn" disabled={current==10} onClick={()=>onChange(current=10)}>{10}</button>
    const next = <button className="btn" disabled={current===10} onClick={()=>onChange(current+1)}>NEXT</button>;
    
    return (
      <div>
        {next}
        {tenthPage}
        {ninthPage}
        {eighthPage}
        {seventhPage}
        {sixthPage}
        {fifthPage}
        {fourthPage}
        {thirdPage}
        {secondPage}
        {prev}
      </div>
    );
  }
  
  export default Pagination;