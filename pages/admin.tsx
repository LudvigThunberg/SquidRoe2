import { AddNewPlaylist } from '../components/basic/AddNewPLaylist';
import { AddNewRelease } from '../components/basic/AddNewRelease';
import { Box } from '../components/styledComponents/Box';

export default function Admin() {
  return (
    <Box>
      <AddNewRelease />
      <AddNewPlaylist />
    </Box>
  );
}
