import React, { Component } from 'react'
import styled from 'styled-components'

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

class Works extends Component {
  render() {
    return (
      <CartoonBox>
        <p className="title">Works</p>
        <div className="works">
          {['crm.png', 'dashbord.png', 'c-mentee.png', 'c-mentor.png'].map((v, i) => (
            <div
              className="wrap"
              key={i}
            >
              <img src={`${static_url}${v}`}
                alt={`work-${v}`}
              />
            </div>
          ))}
        </div>
      </CartoonBox>
    )
  }
}



export default Works