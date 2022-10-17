import React from 'react'
import CardDeck from '../components/CardDeck'
import SectionTitle from '../components/SectionTitle'

const CardSection = ({title, ingress, items, columns}) => {
  return (
    <section>
        <SectionTitle title={title} ingress={ingress} />
        <CardDeck items={items} columns={columns} />   
    </section>
  )
}

export default CardSection