import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import ProjectList from '../components/projectList'

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>bramsinke/projects</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <ProjectList />
    </div>
  )
}

export default Projects