"use client";

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateWidget = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [widget, setWidget] = useState({
    prompt: '',
    tag: '',
  });

  const createWidget = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/widget/create', {
        method: 'POST',
        body: JSON.stringify({
          prompt: widget.prompt,
          userId: session?.user.id,
          tag: widget.tag
        })
      })

      if (response.ok) {
        router.push('/');
      }

    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Create"
      widget={widget}
      setWidget={setWidget}
      submitting={submitting}
      handleSubmit={createWidget}
    >

    </Form>
  )
}

export default CreateWidget