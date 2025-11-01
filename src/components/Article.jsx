import './Article.css'

export default function Article({title, content, video_link="", link}){

    return (
        <div>
            <a className="header" href={link}>{title}</a>
            <p className="content">{content}</p>
            {video_link && <iframe
            title="vimeo-player"
            src={video_link}
            width="560"
            height="315"
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowfullscreen
        ></iframe>}
        </div>
    );
}

