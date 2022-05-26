import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { testMeta } from '../../pages/projects/test.mdx'

const ProjectContainer = styled(motion.div)`
display: flex;
flex-direction: column;
margin: 5%;
`

const ProjectVideo = styled(motion.video)`
width: 20vw;
height: 20vh;
object-fit: cover;
cursor: pointer;
`

const ProjectTitle = styled(motion.h1)`
color: white;
`

const ProjectDescription = styled(motion.h2)`
color: white;
font-size: 1rem;
`

const ProjectList = () => {
  return (
      <ProjectContainer>
        <ProjectVideo
          autoPlay
          muted
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <source src={testMeta.url} />
        </ProjectVideo>
        <ProjectTitle>My project</ProjectTitle>
        <ProjectDescription>This is the description</ProjectDescription>
      </ProjectContainer>
  )
}
export default ProjectList
