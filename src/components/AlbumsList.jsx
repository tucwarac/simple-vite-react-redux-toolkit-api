import { useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import ExpandablePabel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3}/>
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>;

      return <ExpandablePabel key={album.id} header={header}>
        List of photo in the album
      </ExpandablePabel>
    });
  }

  return <div>
    <div>
      Albums for {user.name}
    </div>
    <div>
      {content}
    </div>
  </div>
}

export default AlbumsList;
