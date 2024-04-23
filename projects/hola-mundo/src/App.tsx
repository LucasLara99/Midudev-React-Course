import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const formatUsername = (userName: any) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUsername={formatUsername}
                name='Lucas'
                userName='lucario'
            />
            <TwitterFollowCard
                formatUsername={formatUsername}
                name="Nacho"
                userName="nachete45"
            />
            <TwitterFollowCard
                formatUsername={formatUsername}
                name={'Luisardo'}
                userName={'Luisete'}
            />
            <TwitterFollowCard
                formatUsername={formatUsername}
                name={"Lucia"}
                userName={"Lusilu99"}
            />
        </section>
    )
}