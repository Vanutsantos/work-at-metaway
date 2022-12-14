import React from 'react'
import './styles.scss'

interface ListProps  {
  header: any
  content: any

}

const List = ({ header, content }:ListProps):JSX.Element => {
  const makeContent = (value:any):any => {
    switch (value) {
      case true:
        return 'Sim'
      case false:
        return 'Não'
      default:
        return value ? value : '-'
    }
  }

  return(
    <div className='list-component'>
      <div className='header'>
        {header.map((th:any) => (
          <div 
            key={th.object}
            className='custom-th'
            style={{
              width: `${100/Number(header.length)}%`
            }}
          >
            <h4>{th.title}</h4>
          </div>
        ))}
      </div>
      <div className='body'>
        {content.map((th:any) => (
          <div key={th.id} className="custom-tr">
            {header.map((td:any) => (
              <div 
                key={td.object} 
                className='custom-td'
                style={{
                  width: `${100/Number(header.length)}%`
                }}
              >
                <p key={td.object}>
                  {
                    td.actions 
                      ? td.actions(th)
                      : makeContent(th[td.object])
                  }
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
