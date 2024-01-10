export default function Header({ value, index }) {
  // console.log(value);
  return (
    <div className="flex-row">
      {value && (
        <div className="flex-row gapP5 w-100">
          <h3>
            <img
              src={value.author.avatar_url}
              alt={""}
              className="profilepic"
            />
          </h3>
          <div className="w-100">
            <h3 className="header">{value.commit.message}</h3>
            <span className="muted">
              Authored by{" "}
              <span className="text-body">{value.commit.author.name}</span>
            </span>
            <div className="flex-row justify-between w-100">
              <div className="w-50">
                <div>{value.commit.message}</div>
              </div>
              <div className="txt-al-r">
                {value.commit.author.name === value.commit.committer.name ? (
                  ""
                ) : (
                  <div className="muted">
                    Committed by {value.commit.committer.name}
                  </div>
                )}
                <div className="muted">
                  Commit <span className="text-body">{value.sha}</span>
                </div>
                <div className="muted">
                  Parent <span className="link">{value.parents[0].sha}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
