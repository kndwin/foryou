import Layout from '../components/Layout'

export default function IndexPage () {
  console.log(process.env.GITHUB_ID)
  return (
    <Layout title="For you">
      <h1>For you 👈</h1>
      <p>A blog with a markdown editor</p>
    </Layout>
  )
}
