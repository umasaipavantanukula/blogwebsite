#!/bin/bash
# This build script helps avoid the stack overflow error during Vercel deployment

# Increase Node.js max memory
export NODE_OPTIONS="--max-old-space-size=4096"

# Run the Next.js build with reduced tracing
next build