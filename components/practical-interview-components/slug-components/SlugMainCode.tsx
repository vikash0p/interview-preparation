'use client'
import React from 'react'
import { LivePreviewCode } from "./LivePreviewCode"
import { SlugCodeEditor } from "./SlugCodeEditor"

export const SlugMainCode = () => {
  return (
    <section className="border  space-y-10">
      <LivePreviewCode />
      <SlugCodeEditor />

    </section>
  )
}
