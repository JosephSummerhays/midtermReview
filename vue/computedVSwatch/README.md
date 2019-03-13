# Computed VS Watcher functions

Watch and computed properties both implement reactivity. This means, the user does something, and the
functions react. Both implement this by watching variables that change. So what's the difference?

A watcher function only watches one variable: the one it's named after. A computed function watches all
of it's dependencies (any variable it uses but didn't define). A watcher function doesn't return
anything. A computed function does.

### Question
List the variables the computed and watcher functions depend on.

The example here isn't mean't to be useful, it's just to make a point. Try changing the values. A change
in any variable it depends on will cause it to recompute. Changing the watcher dependencies will not,
except the one it's named after. 

### Answers
The computed function is dependent on and will rerender when these values change:
- dependent1
- dependent2
- dependent3
- numTimesChanged (notice how if you resubmit the same words it still recomputes).

It is **not** dependent on:
- inp1
- inp2
- inp3
- watcherOutput
- toReturn
- randomNumber

The watch function is only dependent on dependent1, and will rerun only when it changes.

## Remember for midterm
Watcher functions are recalled when the variable they're watching changes, even if they have other
dependencies. Computed functions watch all of their dependencies, not just one. Watcher functions don't
return anything. Computed functions do.
