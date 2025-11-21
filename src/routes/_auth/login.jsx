import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const accountDummy = {
    userId: '019A698A43EA778587A64BA7E9E58784',
    password: '$2a$12$OxYBiRRrtePakTIhbVgJr.XzTF6tiAec2GefCb0SPqOTUXB5glRnG',
    userName: '김철수',
    email: 'user1@example.com',
    role: 'USER',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    // 이메일 비었는지 확인
    if (!email.trim()) {
      setErrorMsg('이메일을 입력해주세요.');
      return;
    }

    // 비밀번호 비었는지 확인
    if (!password.trim()) {
      setErrorMsg('비밀번호를 입력해주세요.');
      return;
    }

    if (email === accountDummy.email && password === accountDummy.password) {
      console.log('로그인 성공 Dummy user: ', accountDummy);

      //로그인 성공시 홈으로 이동
      navigate({ to: '/' });
    } else {
      setErrorMsg('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  }

  return (
    <main className='font-kakao-big-sans mx-auto max-w-md px-4 py-10'>
      <h1 className='mb-6 text-2xl font-bold'>로그인</h1>

      {errorMsg && <p className='mb-2 text-sm text-red-600'>{errorMsg}</p>}

      <form
        onSubmit={handleSubmit}
        className='space-y-4'
      >
        <div>
          <Label
            htmlFor='email'
            className='text-sm font-medium'
          >
            이메일
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='이메일을 입력하세요'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label
            htmlFor='password'
            className='text-sm font-medium'
          >
            비밀번호
          </Label>
          <Input
            id='password'
            type='password'
            placeholder='비밀번호를 입력하세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type='submit'
          variant='default'
          className='w-full'
        >
          로그인
        </Button>

        <Button
          type='button'
          variant='default'
          className='w-full bg-yellow-300 text-black hover:bg-yellow-400'
          onClick={() => alert('카카오 로그인은 준비 중')}
        >
          카카오로 3초만에 로그인
        </Button>

        <Button
          type='button'
          variant='outline'
          className='w-full'
          onClick={() => navigate({ to: '/auth/join' })}
        >
          아직 계정이 없으신가요? 회원가입
        </Button>
      </form>
    </main>
  );
}
