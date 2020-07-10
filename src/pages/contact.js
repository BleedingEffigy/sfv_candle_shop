import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/navigation"

const ContactPage = () => (
  <Layout>
    <Navigation/>
    <br/>
    <br/>
    <br/>
    <div className="columns is-centered">
      <div className="column is-8">
        <div className="box">
          <h2 className="title is-2 has-text-centered">Reach out to us!</h2>
          <div className="columns">
            <div className="column is-6">
              Email
            </div>
            <div className="column is-6">
              ahern077@gmail.com
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              Phone number
            </div>
            <div className="column is-6">
              (818)744-1508
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
