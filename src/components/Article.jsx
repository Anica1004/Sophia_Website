import './Article.css'

export default function Article({title, content, video_link="", link}){

    return (
        <div>
            <a className="header" href={link}>{title}</a>
            <p className="body-text" dangerouslySetInnerHTML={{ __html: content }} />
            {video_link && (
        <div className="video">
          <iframe
            title="video"
            src={video_link}
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          />
        </div>
      )}
        </div>
    );
}

