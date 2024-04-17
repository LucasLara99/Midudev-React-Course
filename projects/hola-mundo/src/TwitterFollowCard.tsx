import './TwitterFollowCard.css'

interface TwitterFollowCardProps {
    name: String;
    userName: String;
}

export function TwitterFollowCard({name, userName}: TwitterFollowCardProps) {
    return (
        <article className='tw-followcard'>
            <header className='tw-followcard-header'>
                <img
                    className='tw-followcard-avatar'
                    alt="avatar"
                    src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1713312000&semt=sph">
                </img>
                <div className='tw-followcard-info'>
                    <strong>{name}</strong>
                    <span
                        className='tw-followcard-userName'>@{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className='tw-followcard-button'>Seguir</button>
            </aside>
        </article>
    )
}