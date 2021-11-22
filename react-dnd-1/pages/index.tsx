import type { NextPage } from 'next'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'

const Home: NextPage = () => {
  return (
    <div>
      <DndProvider
        backend={TouchBackend}
      >

      </DndProvider>
    </div>
  )
}

export default Home
