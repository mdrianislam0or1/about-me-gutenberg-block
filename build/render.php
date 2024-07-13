<?php

$ourContext = array("attributes" => $attributes);

?>

<div class="" data-wp-interactive="bradsboilerplate" <?php echo wp_interactivity_data_wp_context($ourContext) ?>>
	<h3>Introduce</h3>

	<div class="hero__grid">
		<div class="one__section">
			<img src="<?php echo esc_url($attributes['image']); ?>" alt="Image" data-wp-bind-src="context.attributes.image" />
		</div>

		<div class="two__section">
			<h4 class="title" data-wp-text="context.attributes.name">
			</h4>
			<p data-wp-text="context.attributes.description">
			</p>
			<div class="tags">
				<?php if (!empty($attributes['tags'])) : ?>
					<?php foreach ($attributes['tags'] as $tag) : ?>
						<span class="tag"><?php echo esc_html($tag); ?></span>
					<?php endforeach; ?>
				<?php endif; ?>
			</div>
		</div>
	</div>

	<h3 style="margin-top: 10px;">My Achivements</h3>
	<div class="counters">
		<?php if (!empty($attributes['counters'])) : ?>
			<?php foreach ($attributes['counters'] as $counter) : ?>
				<div class="counter">
					<h3 data-target="<?php echo esc_html($counter['percentage']); ?>">0 %</h3>
					<p class="label"> <?php echo esc_html($counter['label']); ?></p>
				</div>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>

	<h3 style="margin-top: 10px;">What do our users say?</h3>
	<div class="reviews">
		<?php if (!empty($attributes['clientComment'])) : ?>
			<?php foreach ($attributes['clientComment'] as $client) : ?>
				<div class="review">
					<div class="review_img">
						<img src="<?php echo esc_url($client['image']); ?>" alt="Image" data-wp-bind-src="context.attributes.clientComment.image" />
					</div>
					<p class="name"> <?php echo esc_html($client['name']); ?></p>
					<p class="name"> <?php echo esc_html($client['title']); ?></p>
				</div>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>

</div>