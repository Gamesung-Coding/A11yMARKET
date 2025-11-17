import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
    const navigate = useNavigate()

    const accountDummy={
        userId: "019A698A43EA778587A64BA7E9E58784",
        password:"$2a$12$OxYBiRRrtePakTIhbVgJr.XzTF6tiAec2GefCb0SPqOTUXB5glRnG",
        userName:"김철수",
        email:"user1@example.com",
        role: 'USER',

    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setErrorMsg('')

        if(email === accountDummy.email && password === accountDummy.password) {
            console.log("로그인 성공 Dummy user: ", accountDummy)

            //로그인 성공시 홈으로 이동
            navigate({to:'/'})
        } else {
            setErrorMsg("이메일 또는 비밀번호가 올바르지 않습니다.")
        }

    }

    
  return (
    <main className="font-kakao-big-sans max-w-md mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">로그인</h1>

        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">
                    이메일
                </label>
                <input
                    type="email"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="이메일을 입력하세요"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">
                    비밀번호
                </label>
                <input
                    type="password"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="비밀번호를 입력하세요"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md font-semibold text-sm
               hover:bg-gray-900 transition"
                >
            로그인
            </button>

            <button
                type="button"
                onClick={() => navigate({ to: 'auth/join'})}
                className="w-full border  bg-yellow-300 rounded-md py-3 text-sm font-medium"
            >
                카카오로 3초만에 로그인
            </button>

            <button
                type="button"
                onClick={() => navigate({ to:'auth/join'})}
                className="w-full border border-black rounded-md py-3 text-sm font-medium"
            >
                아직 계정이 없으신가요? 회원가입
            </button>


        </form>
    </main>
  )
}
