'use client';

import * as React from 'react';
import { motion, isMotionComponent, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

type AnyProps = Record<string, unknown>;

// Astro adds its own tags (astro-dev-toolbar…) to HTMLElementTagNameMap,
// which motion's prop map doesn't know; leave them out
type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<Exclude<keyof HTMLElementTagNameMap, `astro-${string}`>>,
  'ref'
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

// One motion wrapper per element type, created once at module level so the
// rendered component type is stable across renders
const motionCache = new Map<React.ElementType, React.ElementType>();
function toMotion(type: React.ElementType): React.ElementType {
  if (typeof type === 'object' && type !== null && isMotionComponent(type))
    return type;
  let created = motionCache.get(type);
  if (!created) {
    created = motion.create(type as Parameters<typeof motion.create>[0]);
    motionCache.set(type, created);
  }
  return created;
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  if (!React.isValidElement(children)) return null;

  const { ref: childRef, ...childProps } = children.props as AnyProps;

  return React.createElement(toMotion(children.type as React.ElementType), {
    ...mergeProps(childProps, props),
    ref: mergeRefs(childRef as React.Ref<T>, ref),
  });
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};
