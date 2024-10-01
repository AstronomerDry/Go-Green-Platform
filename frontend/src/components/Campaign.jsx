import React from 'react'

export default function Campaign() {
  return (
    <div className="container">
      <header>
        <h1>Join the Eco-Friendly Brigade</h1>
      </header>
      <main>
      <section className="cards">
          <article className="card">
            <h2>Tree planting drives</h2>
            <p>Organize community tree planting events to increase the green cover in the area. Trees absorb carbon dioxide and other pollutants, helping to improve air quality</p>
          </article>
          <article className="card">
            <h2> Lake Clean-Up Events</h2>
            <p> Organize clean-up drives for local rivers, lakes, or beaches to remove trash and pollutants from these water bodies</p>
          </article>
          <article className="card">
            <h2>Community Recycling Programs</h2>
            <p>Establish a recycling program within the society to manage waste more sustainably and reduce landfill use</p>
          </article>
      </section>
        <header>
          <p>Join the Go Green community and commit to a sustainable lifestyle, protecting our planet for future generations. Your actions—like reducing waste, conserving energy, and participating in eco-friendly initiatives—make a significant impact. Together, we create a healthier, greener world through community-driven efforts.Join the Go Green community to earn incentives like cash back, discount vouchers, and gift cards by recycling items and participating in eco-friendly activities. Together, let's make a sustainable impact!</p>
        </header>
        <button className="join-now-button">
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSepcYS8z9ysiul4eQ1we1gUf-ipuKMNo3Dvpls5PBCbw8Odnw/viewform'>Join Now</a>
        </button>
      </main>
    </div>
  );
}