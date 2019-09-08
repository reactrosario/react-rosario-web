import React from 'react'
import styled from 'styled-components'

const ContributorsCard = () => {
  return(
    <Card>
      <CardTop>
        <RoundImg>
          <img src="https://www.novelasligeras.site/wp-content/uploads/2019/04/Saitama-portada-min-1024x575.jpg" height="100%" alt="saitama"/>
        </RoundImg> 
      </CardTop>
  <CardBody>
    <CardTitle>Saitama</CardTitle>
    <CardText>Él es Saitama, un copado. No hizo nada por la página de React Rosario pero sí ayudó a hacer del mundo un lugar más seguro.</CardText>
  </CardBody>
    </Card>
  )
}

const Card = styled.div`
  margin: 0px auto;
  display: grid;
  justify-self: center;
  background-color: white;
  height: 485.4px;
  width: 300px;
  border: 3px solid white;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0px 10px 20px black;
  transition: transform 0.3s;
  &&:hover{
    transform: scale(1.016);
    transition: transform 0.2s;
  }
`
const CardTop = styled.div`
  height: 185.4px;
  background-color: #8B00F6;
  display: grid;
  justify-content: center;
  align-items: center;
`
const RoundImg = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 115px;
  width: 115px;
  border: 3px solid white;
  border-radius: 50%;
  overflow: hidden;
`
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #04BBFF;
  border-top: 3px solid white;
  color: #55198B;
`
const CardTitle = styled.div`
  text-align: center;
  font-family: arial;
  font-size: 2em;
  font-weight: bold;
  padding: 20px;
`
const CardText = styled.div`
  padding: 0 30px 30px 30px;
  font-family: arial;
  font-size: 1.2em;
  color: black;
  text-align: center;
`

export default ContributorsCard