import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

 export const candleImage = graphql`
   fragment candleImage on File {
     childImageSharp {
       fixed(width: 400, height:300, cropFocus: CENTER, fit: FILL) {
         ...GatsbyImageSharpFixed
       }
     }
   }
 `

const Image = (props) => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        ...candleImage
      }
      blue_pyramid: file(relativePath: { eq: "blue_pyramid_candle.jpg" }) {
        ...candleImage
      }
      blue_round: file(relativePath: { eq: "blue_round_candle.jpg" }) {
        ...candleImage
      }
      blue_square: file(relativePath: { eq: "blue_square_candle.jpg" }) {
        ...candleImage
      }
      red_pyramid: file(relativePath: { eq: "red_pyramid_candle.jpg" }) {
        ...candleImage
      }
      red_round: file(relativePath: { eq: "red_round_candle.jpg" }) {
        ...candleImage
      }
      red_square: file(relativePath: { eq: "red_square_candle.jpeg" }) {
        ...candleImage
      }
      violet_pyramid: file(relativePath: { eq: "violet_pyramid_candle.jpg" }) {
        ...candleImage
      }
      violet_round: file(relativePath: { eq: "violet_round_candle.jpg" }) {
        ...candleImage
      }
      violet_square: file(relativePath: { eq: "violet_square_candle.jpg" }) {
        ...candleImage
      }
      yellow_pyramid: file(relativePath: { eq: "yellow_pyramid_candle.jpg" }) {
        ...candleImage
      }
      yellow_round: file(relativePath: { eq: "yellow_round_candle.jpg" }) {
        ...candleImage
      }
      yellow_square: file(relativePath: { eq: "yellow_square_candle.jpg" }) {
        ...candleImage
      }
      violet_etched_stripes: file(relativePath: { eq: "violet_round_candle.jpg" }) {
        ...candleImage
      }
      red_etched_stripes: file(relativePath: { eq: "red_round_candle.jpg" }) {
        ...candleImage
      }
      yellow_etched_stripes: file(relativePath: { eq: "yellow_round_candle.jpg" }) {
        ...candleImage
      }
      blue_etched_stripes: file(relativePath: { eq: "blue_round_candle.jpg" }) {
        ...candleImage
      }
    }
  `)

  return <Img fixed={data[`${props.color}_${props.shape}`].childImageSharp.fixed} />
}

export default Image
