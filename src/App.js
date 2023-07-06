import './App.css';
import FollowerList from './follwer';
import FollowingList from './following';
import StandardImageList from './profile';
import BasicButtons from './Button';
import ImageAvatars from './avatar';
import A from './slider';


function App() {
  return (
<div>
    <div id="wrap">
      <div id="header">
      Header
      </div>
      <div id = "bt">
        <BasicButtons/>
      </div>
      <hr/>
      <div id="side">
        <div id = "avatarpos">
        <ImageAvatars/>
        </div>
        <div id = "namepos">
          name
        </div>
      </div>
      <div id="contents">
        <StandardImageList/>
      </div>

      <div id="slidepos">
        <A/>
      </div>

    </div>
    </div>
  );
}

export default App;
