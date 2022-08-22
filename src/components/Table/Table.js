export default function Table({bodyData,headers}){
    let headerRows = [];
    let isCheckSimbol = <></>;
    headers.forEach((header, index) => {
        headerRows.push(<th key={index}>{header}</th>);
    });
    const Check = (isCheck) =>{
        if(isCheck === 'yes'){
            isCheckSimbol = <i className="bi bi-check2"></i>
        } else isCheckSimbol = <></>
        return isCheckSimbol
    }
    return(
        <table className="table">
            <thead>
              <tr>{headerRows}</tr>
            </thead>
            <tbody>
              {bodyData.map((bodyData, index) => {
                
                return (
                  <tr key={index}>
                    <td>{bodyData.type}</td>
                    <td>{Check(bodyData.free)}</td>
                    <td>{Check(bodyData.pro)}</td>
                    <td>{Check(bodyData.enterprise)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    )
}