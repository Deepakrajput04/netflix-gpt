import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constant'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Correct usage of useSelector to get the user from the store
  const user = useSelector((state) => state.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.error('Error signing out: ', error) // Log the error for debugging
        navigate('/error')
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
    // Unsbscribe when components Unmounts
    return () => unsubscribe();
  }, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          <button
            onClick={handleSignOut}
            className="font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
