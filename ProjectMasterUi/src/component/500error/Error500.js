import React from 'react'

function Error500() {
  return (
    <div class="auth">
    <div class="auth_left">
        <div class="card">
            <div class="card-body">
                <div class="display-3 text-muted mb-5"><i class="si si-exclamation"></i> 500</div>
                <h1 class="h3 mb-3">Oops.. You just found an error page..</h1>
                <p class="h6 text-muted font-weight-normal mb-3">We are sorry but your request contains bad syntax and cannot be fulfilled&hellip;</p>
                <a class="btn btn-primary" href="javascript:history.back()"><i class="fe fe-arrow-left mr-2"></i>Go back</a>
            </div>
        </div>        
    </div>
    <div class="auth_right full_img"></div>
</div>

  )
}

export default Error500;