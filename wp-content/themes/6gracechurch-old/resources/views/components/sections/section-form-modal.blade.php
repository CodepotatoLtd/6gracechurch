<div id="modal-form" class="modal modal-form medium fade bd-example-modal-lg" data-time="<?php the_field('time_delay', 'options')?>" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header text-dark">

        <?php

        $image = get_field('modal_header', 'options');?>


        <div class="header-background" style="
          background-image: url('<?php echo $image; ?>');
          background-repeat: no-repeat;
          background-position: center center;
          -webkit-background-size:  cover;
          -moz-background-size:  cover;
          -o-background-size:  cover;
          background-size: cover;

          ">


          <div class="modal-title" ><h3>Apply now for flexible funding</h3></div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.377" height="20.45" viewBox="0 0 21.377 20.45">
              <defs>
                <style>
                  .cls-1 {
                    fill: none;
                    stroke: #62e8b9;
                    stroke-width: 2px;
                  }
                </style>
              </defs>
              <g id="Group_126" data-name="Group 126" transform="translate(-933.811 -256.775)">
                <line id="Line_9" data-name="Line 9" class="cls-1" y1="19" x2="20" transform="translate(934.5 257.5)"/>
                <line id="Line_10" data-name="Line 10" class="cls-1" x1="20" y1="19" transform="translate(934.5 257.5)"/>
              </g>
            </svg>
          </button>

        </div>
      </div>
      <div class="modal-body">
          <?php the_field('modal_text', 'options')?>
      </div>
    </div>
  </div>
</div>
