import React, { Component } from 'react'
import styled from 'styled-components'
import crm from '../../public/image/CRM.png'
import dashbord from '../../public/image/dashbord.png'
import cmentor from '../../public/image/c-mentor.png'
import cmentee from '../../public/image/c-mentee.png'


const CartoonBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .title{
    width: 100%;
    text-align:center;
    font-size: 2rem;
  }
  .works{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    .wrap{
      margin: 0 auto 1rem auto;
    }
    img{
      display: block;
      max-width: 100%;
    }
  }
`

class Cartoon extends Component {
  render() {
    return (
      <CartoonBox>
        <p className="title">Works</p>
        <div className="works">
          {[crm, dashbord, cmentee, cmentor].map((v, i) => (
            <div className="wrap">
              <img src={v}
                alt={`work-${i}`}
                key={i}
              />
            </div>
          ))}
        </div>
      </CartoonBox>
    )
  }
}



export default Cartoon